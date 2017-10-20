package com.mzg1995.service.Impl;

import com.mzg1995.dao.ContentDao;
import com.mzg1995.model.SqlModel.DiaryModel;
import com.mzg1995.model.SqlModel.KnowledgeModel;
import com.mzg1995.model.SqlModel.ScheduleModel;
import com.mzg1995.service.ContentService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by mzg on 2017/10/19.
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class ContentServiceImpl implements ContentService {
    @Resource
    private ContentDao contentDao;

    public long addSchedule(ScheduleModel scheduleModel) {
        return contentDao.addSchedule(scheduleModel);
    }

    public List<ScheduleModel> getSchedule(int page, int pageSize, String email) {
        return contentDao.getSchedule(page, pageSize, email);
    }

    public List<ScheduleModel> getScheduleAll(int page, int pageSize, String email) {
        return contentDao.getScheduleAll(page, pageSize, email);
    }

    public ScheduleModel getScheduleById(long id) {
        return contentDao.getScheduleById(id);
    }

    public long updateSchedule(ScheduleModel scheduleModel) {
        return contentDao.updateSchedule(scheduleModel);
    }

    public long addDiary(DiaryModel diaryModel) {
        return contentDao.addDiary(diaryModel);
    }

    public List<DiaryModel> getDiary(int page, int pageSize, String email) {
        return contentDao.getDiary(page, pageSize, email);
    }

    public DiaryModel getDiaryById(long id) {
        return contentDao.getDiaryById(id);
    }

    public long updateDiary(DiaryModel diaryModel) {
        return contentDao.updateDiary(diaryModel);
    }

    public long addKonwledge(KnowledgeModel knowledgeModel) {
        return contentDao.addKonwledge(knowledgeModel);
    }

    public List<KnowledgeModel> getKnowledge(int page, int pageSize, String email) {
        return contentDao.getKnowledge(page, pageSize, email);
    }

    public KnowledgeModel getKnowledgeById(long id) {
        return contentDao.getKnowledgeById(id);
    }

    public long getKnowledgeMaxId() {
        return contentDao.getKnowledgeMaxId();
    }

    public long updateKnowledge(KnowledgeModel knowledgeModel) {
        return contentDao.updateKnowledge(knowledgeModel);
    }
}
