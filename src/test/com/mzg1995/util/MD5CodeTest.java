package com.mzg1995.util;

import org.junit.Test;

/**
 * Created by mzg on 2017/10/18.
 */
public class MD5CodeTest {
    @Test
    public void getMD5ofStr() throws Exception {
        //加盐处理，类似于  密码{用户名}
        String pwd = "HelloStranger{1666188122@qq.com}";
        String md5 = new MD5Code().getMD5ofStr(pwd);
        System.out.println("MD5加密前 ：  " + pwd);
        System.out.println("MD5加密后 ：  " + md5);
        System.out.println("加密后长度 ：  " + md5.length());
    }

    @Test
    public void b2iu() throws Exception {
    }

    @Test
    public void byteHEX() throws Exception {
    }

}