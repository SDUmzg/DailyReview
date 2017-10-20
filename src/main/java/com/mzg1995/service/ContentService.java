package com.mzg1995.service;

import com.mzg1995.model.SqlModel.DiaryModel;
import com.mzg1995.model.SqlModel.KnowledgeModel;
import com.mzg1995.model.SqlModel.ScheduleModel;

import java.util.List;

/**
 * Created by mzg on 2017/10/19.
 */
public interface ContentService {
    //    table name : schedule
    long addSchedule(ScheduleModel scheduleModel);

    List<ScheduleModel> getSchedule(int page, int pageSize, String email);

    List<ScheduleModel> getScheduleAll(int page, int pageSize, String email);

    ScheduleModel getScheduleById(long id);

    long updateSchedule(ScheduleModel scheduleModel);

    //    table name : diary
    long addDiary(DiaryModel diaryModel);

    List<DiaryModel> getDiary(int page, int pageSize, String email);

    DiaryModel getDiaryById(long id);

    long updateDiary(DiaryModel diaryModel);

    //    table name : knowledge
    long addKonwledge(KnowledgeModel knowledgeModel);

    List<KnowledgeModel> getKnowledge(int page, int pageSize, String email);

    KnowledgeModel getKnowledgeById(long id);

    long getKnowledgeMaxId();

    long updateKnowledge(KnowledgeModel knowledgeModel);
}
