package com.mzg1995.model.SqlModel;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by mzg on 2017/10/18.
 */
@Setter
@Getter
public class BaseModel {
    private long id;
    private int enabled;
    private String create_time;
    private String update_time;
}
