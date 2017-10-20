package com.mzg1995.util;

import com.mzg1995.model.InterfaceModel.DataModel;

/**
 * Created by mzg on 2017/10/19.
 */
public class ContentUtil {
    public static void getDatamodelAfterUpdate(DataModel dataModel, long num) {
        if (num != 0) {
            dataModel.setTotal(1);
            dataModel.setState("success");
        } else {
            dataModel.setTotal(0);
            dataModel.setState("error");
        }
    }
}
