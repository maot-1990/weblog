package com.personalblog.service.impl;

import com.personalblog.dao.ImgStoreMapper;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.ImgStoreDO;
import com.personalblog.dataobject.ImgStoreDOExample;
import com.personalblog.exception.BaseException;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.ArticleService;
import com.personalblog.service.ImgService;
import com.personalblog.util.UUId;
import com.personalblog.vo.UserVO;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Random;

import static com.personalblog.context.Constant.VERIFY_CODE;

/**
 * Created by tao.mao on 2020/8/27.
 */
@Service
public class ImgServiceImpl implements ImgService {


    public static final String chars = "abcdefghjkmnpqrstuvwxyz779396604";

    @Value("${personal.imgPath}")
    private String imgPath;
    @Value("${personal.showImgUrl}")
    private String showImgUrl;
    @Resource
    private ImgStoreMapper imgStoreMapper;

    @Override
    public void showImg(String id, HttpServletRequest request, HttpServletResponse response) throws Exception {
        ImgStoreDOExample example = new ImgStoreDOExample();
        example.createCriteria().andIdEqualTo(id);
        ImgStoreDO imgStore = imgStoreMapper.selectOneByExample(example);
        File file = new File(imgPath + id + "." + imgStore.getType());
        try(InputStream is = new FileInputStream(file);
            OutputStream os = response.getOutputStream()) {
            IOUtils.copy(is, os);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public ImgStoreDO upload(MultipartFile file, UserVO user) {

        ImgStoreDO imgStore;
        try {

            String imgType = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1);
            imgStore = uploadByte(file.getBytes(), imgType, user);
        } catch (IOException e) {
            throw new BaseException("上传文件异常", ResponseCode.BIZ_ERROR);
        }
        return imgStore;
    }

    @Override
    public ImgStoreDO uploadByte(byte[] bytes, String type, UserVO user) {
        ImgStoreDO imgStore;
        try {
            String id = UUId.getUUId();
            File imgFile = new File(imgPath + id + "." + type);
            if (!imgFile.exists()) {
                imgFile.createNewFile();
            }
            FileOutputStream fos = new FileOutputStream(imgFile);
            fos.write(bytes);
            fos.close();
            imgStore = new ImgStoreDO();
            imgStore.setId(id);
            imgStore.setType(type);
            imgStore.setSize((long) (bytes.length / 1024));
            if (user != null) {
                imgStore.setUploadUserId(user.getId());
                imgStore.setNickName(user.getNickName());
            }
            imgStore.setUrl(String.format(showImgUrl, id));
            imgStoreMapper.insertSelective(imgStore);
        } catch (IOException e) {
            throw new BaseException("上传文件异常", ResponseCode.BIZ_ERROR);
        }
        return imgStore;
    }

    @Override
    public void verifyCode(HttpServletRequest request, String code) {
        String verifyCode = (String) request.getSession().getAttribute(VERIFY_CODE);
        if (!code.equalsIgnoreCase(verifyCode)) {
            throw new BaseException("验证码不对", ResponseCode.PARAM_ERROR);
        }
    }

    @Override
    public void getVerifyCode(HttpServletRequest request, HttpServletResponse response) throws Exception {
        int width = 120;
        int height = 42;

        // 步骤一 绘制一张内存中图片
        BufferedImage bufferedImage = new BufferedImage(width, height,
                BufferedImage.TYPE_INT_RGB);

        // 步骤二 图片绘制背景颜色 ---通过绘图对象
        Graphics graphics = bufferedImage.getGraphics();// 得到画图对象 --- 画笔
        // 绘制任何图形之前 都必须指定一个颜色
        graphics.setColor(getRandColor(200, 250));
        graphics.fillRect(0, 0, width, height);

        // 步骤三 绘制边框
        graphics.setColor(Color.WHITE);
        graphics.drawRect(0, 0, width - 1, height - 1);

        // 步骤四 四个随机数字
        Graphics2D graphics2d = (Graphics2D) graphics;
        // 设置输出字体
        graphics2d.setFont(new Font("宋体", Font.BOLD, 24));

        Random random = new Random();
        String word = getRandomCode();

        // 定义x坐标
        int x = 10;
        for (int i = 0; i < word.length(); i++) {
            // 随机颜色
            graphics2d.setColor(new Color(20 + random.nextInt(110), 20 + random
                    .nextInt(110), 20 + random.nextInt(110)));
            // 旋转 -30 --- 30度
            int jiaodu = random.nextInt(60) - 30;
            // 换算弧度
            double theta = jiaodu * Math.PI / 180;

            // 获得字母数字
            char c = word.charAt(i);

            // 将c 输出到图片
            graphics2d.rotate(theta, x, 30);
            graphics2d.drawString(String.valueOf(c), x, 30);
            graphics2d.rotate(-theta, x, 30);
            x += 30;
        }

        // 将验证码内容保存session
        request.getSession().setAttribute(VERIFY_CODE, word);

        // 步骤五 绘制干扰线
        graphics.setColor(getRandColor(160, 200));
        int x1;
        int x2;
        int y1;
        int y2;
        for (int i = 0; i < 30; i++) {
            x1 = random.nextInt(width);
            x2 = random.nextInt(12);
            y1 = random.nextInt(height);
            y2 = random.nextInt(12);
            graphics.drawLine(x1, y1, x1 + x2, x2 + y2);
        }

        // 将上面图片输出到浏览器 ImageIO
        graphics.dispose();// 释放资源

        //将图片写到response.getOutputStream()中
        ImageIO.write(bufferedImage, "jpg", response.getOutputStream());
    }

    /**
     * 取其某一范围的color
     *
     * @param fc
     *            int 范围参数1
     * @param bc
     *            int 范围参数2
     * @return Color
     */
    private Color getRandColor(int fc, int bc) {
        // 取其随机颜色
        Random random = new Random();
        if (fc > 255) {
            fc = 255;
        }
        if (bc > 255) {
            bc = 255;
        }
        int r = fc + random.nextInt(bc - fc);
        int g = fc + random.nextInt(bc - fc);
        int b = fc + random.nextInt(bc - fc);
        return new Color(r, g, b);
    }

    public String getRandomCode() {
        Random random = new Random();
        Integer size = chars.length();
        StringBuilder word = new StringBuilder();
        while (word.length() < 4) {
            word.append(chars.charAt(random.nextInt(size-1)));
        }
        return word.toString();
    }


}
