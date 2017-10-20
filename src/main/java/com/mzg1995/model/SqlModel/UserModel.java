package com.mzg1995.model.SqlModel;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by mzg on 2017/10/18.
 */
@Setter
@Getter
public class UserModel extends BaseModel {
    private String nickname;
    private String email;
    private String password;
}
