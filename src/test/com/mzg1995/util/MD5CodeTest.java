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

    @Test
    public void getDateFormat() throws Exception{
        String date = "2017-09-08 14:34:19.0";
        String[]  a=date.split("[ -]");
        for (int i=0;i<a.length;i++){
            System.out.println(a[i]);
        }
        int year = Integer.parseInt(a[0]);
        int month = Integer.parseInt(a[1]);
        int day = Integer.parseInt(a[2]);
        System.out.println(year+"/"+month+"/"+day);
    }

}