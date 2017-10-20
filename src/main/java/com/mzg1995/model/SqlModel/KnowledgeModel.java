package com.mzg1995.model.SqlModel;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by mzg on 2017/10/18.
 */
@Setter
@Getter
public class KnowledgeModel extends BaseModel {
    private String question;
    private String answer;
    private int proficiency;
    private String email;
}
