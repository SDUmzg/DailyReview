package com.mzg1995.dao;

import com.mzg1995.model.SqlModel.DiaryModel;
import com.mzg1995.model.SqlModel.KnowledgeModel;
import com.mzg1995.model.SqlModel.ScheduleModel;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by mzg on 2017/10/19.
 */
@Repository
public interface ContentDao {
    //    table name : schedule
    long addSchedule(ScheduleModel scheduleModel);
//    只获取有效的  enable = 1
    List<ScheduleModel> getSchedule(@Param("page") int page,@Param("pageSize") int pageSize,@Param("email")String email);
//    获取全部的
    List<ScheduleModel> getScheduleAll(@Param("page") int page,@Param("pageSize") int pageSize,@Param("email")String email);
    ScheduleModel getScheduleById(@Param("id")long id);
    long updateSchedule(ScheduleModel scheduleModel);

    //    table name : diary
    long addDiary(DiaryModel diaryModel);
    List<DiaryModel> getDiary(@Param("page")int page , @Param("pageSize") int pageSize,@Param("email")String email);
    List<DiaryModel> getDiaryByYear(@Param("year")String year,@Param("email")String email);
    DiaryModel getDiaryById(@Param("id")long id);
    long updateDiary(DiaryModel diaryModel);

    //    table name : knowledge
    long addKonwledge(KnowledgeModel knowledgeModel);
    List<KnowledgeModel> getKnowledge(@Param("page")int page,@Param("pageSize")int pageSize,@Param("email")String email);
    KnowledgeModel getKnowledgeById(@Param("id")long id);
    long getKnowledgeMaxId();
    long updateKnowledge(KnowledgeModel knowledgeModel);


}
