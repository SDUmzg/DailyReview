package com.mzg1995.model.SqlModel;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by mzg on 2017/10/18.
 */
@Setter
@Getter
public class DiaryModel extends BaseModel {
    private String topic;
    private String content;
    private String email;
}
