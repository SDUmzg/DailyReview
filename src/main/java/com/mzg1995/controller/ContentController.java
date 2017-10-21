package com.mzg1995.controller;

import com.mzg1995.model.InterfaceModel.DataModel;
import com.mzg1995.model.SqlModel.DiaryModel;
import com.mzg1995.model.SqlModel.KnowledgeModel;
import com.mzg1995.model.SqlModel.ScheduleModel;
import com.mzg1995.service.ContentService;
import com.mzg1995.util.ContentUtil;
import com.sun.javafx.collections.MappingChange;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.xml.crypto.Data;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by mzg on 2017/10/19.
 */
@RequestMapping(value = "/content")
@Controller
public class ContentController {
    public static Logger logger = Logger.getLogger(System.class);
    @Autowired
    private ContentService contentService;

    @ResponseBody
    @RequestMapping(value = "/addSchedule", method = RequestMethod.GET)
    public DataModel addSchedule(@RequestParam(value = "content") String content, @RequestParam(value = "email") String email) {
        DataModel dataModel = new DataModel();
        ScheduleModel scheduleModel = new ScheduleModel();
        scheduleModel.setContent(content);
        scheduleModel.setEmail(email);
        long resultCode = contentService.addSchedule(scheduleModel);
        ContentUtil.getDatamodelAfterUpdate(dataModel, resultCode);
        dataModel.setData(scheduleModel.getId());
        return dataModel;
    }

    @ResponseBody
    @RequestMapping(value = "/getSchedule", method = RequestMethod.GET)
    public DataModel getSchedule(@RequestParam("page") int page, @RequestParam("pageSize") int pageSize, @RequestParam(value = "email") String email) {
        DataModel dataModel = new DataModel();
        List<ScheduleModel> scheduleModelList = contentService.getSchedule(page, pageSize, email);
        dataModel.setTotal(scheduleModelList.size());
        dataModel.setState("success");
        dataModel.setData(scheduleModelList);
        return dataModel;
    }

    @ResponseBody
    @RequestMapping(value = "/getScheduleAll", method = RequestMethod.GET)
    public DataModel getScheduleAll(@RequestParam("page") int page, @RequestParam("pageSize") int pageSize, @RequestParam(value = "email") String email) {
        DataModel dataModel = new DataModel();
        List<ScheduleModel> scheduleModelList = contentService.getScheduleAll(page, pageSize, email);
        dataModel.setTotal(scheduleModelList.size());
        dataModel.setState("success");
        dataModel.setData(scheduleModelList);
        return dataModel;
    }

    @ResponseBody
    @RequestMapping(value = "/updateSchedule", method = RequestMethod.GET)
    public DataModel updateSchedule(@RequestParam("id") long id, @RequestParam("content") String content) {
        DataModel dataModel = new DataModel();
        ScheduleModel scheduleModel = contentService.getScheduleById(id);
        scheduleModel.setContent(content);
        long resultCode = contentService.updateSchedule(scheduleModel);
        ContentUtil.getDatamodelAfterUpdate(dataModel, resultCode);
        dataModel.setData(scheduleModel.getId());
        return dataModel;
    }

    @ResponseBody
    @RequestMapping(value = "/disableSchedule", method = RequestMethod.GET)
    public DataModel disableSchedule(@RequestParam("id") long id) {
        DataModel dataModel = new DataModel();
        ScheduleModel scheduleModel = contentService.getScheduleById(id);
        scheduleModel.setEnabled(0);
        long resultCode = contentService.updateSchedule(scheduleModel);
        ContentUtil.getDatamodelAfterUpdate(dataModel, resultCode);
        dataModel.setData(scheduleModel.getId());
        return dataModel;
    }


    /**  ******  ******  ******  ******  ******  ******  ******  ******  ******  ******  */

    @ResponseBody
    @RequestMapping(value = "/getKnowledge",method = RequestMethod.GET)
    public DataModel getKnowledge(@RequestParam("page") int page, @RequestParam("pageSize") int pageSize, @RequestParam(value = "email") String email){
        DataModel dataModel =  new DataModel();
        List<KnowledgeModel> knowledgeModelList = contentService.getKnowledge(page,pageSize,email);
        dataModel.setTotal(knowledgeModelList.size());
        dataModel.setState("success");
        dataModel.setData(knowledgeModelList);
        return dataModel;
    }


    /**  ******  ******  ******  ******  ******  ******  ******  ******  ******  ******  */


    @ResponseBody
    @RequestMapping(value = "getDiaryByYear",method = RequestMethod.GET)
    public DataModel getDiaryByYear(@RequestParam("year")String year,@RequestParam("email")String email){
        DataModel dataModel = new DataModel();
        /**
         * {
         "2017/9/20": {
         url: "/diary/2017/09/20/soyaine-daily-151" ,
         excerpt: ""
         }
         }*/
        List<DiaryModel> diaryModelList =contentService.getDiaryByYear(year,email);
        int size = diaryModelList.size();
        Map<String,Object> result = new HashMap<>();
        DiaryModel diaryModel;
        for (int i=0;i<size;i++){
            diaryModel = diaryModelList.get(i);
            Map<String,Object> temp =new HashMap<>();
            String[] timeArray=diaryModel.getCreate_time().split("[ -]");
            String aTime = Integer.parseInt(timeArray[0]) +"/"+ Integer.parseInt(timeArray[1]) +"/"+Integer.parseInt(timeArray[2]);
            long url = diaryModel.getId();
            String excerpt = diaryModel.getTopic();
            temp.put("url",url);
            temp.put("excerpt",excerpt);
            result.put(aTime,temp);
        }
        dataModel.setTotal(size);
        dataModel.setState("success");
        dataModel.setData(result);
        return dataModel;
    }


    @ResponseBody
    @RequestMapping(value = "/getDiaryById",method = RequestMethod.GET)
    public DataModel getDiaryById(@RequestParam("id")long id){
        DataModel dataModel=new DataModel();
        DiaryModel diaryModel = contentService.getDiaryById(id);
        if (diaryModel!=null){
            dataModel.setTotal(1);
            dataModel.setState("success");
        }else {
            dataModel.setTotal(0);
            dataModel.setState("error");
        }
        dataModel.setData(diaryModel);
        return dataModel;
    }

}
