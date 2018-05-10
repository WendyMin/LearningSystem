#coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def find_wrong_id(test_id):
    zhongdian_wrong=[]
    for x in test_id:
        timu_id=x[0].split("*")
        while ""in timu_id:
            timu_id.remove("")

        timu_rate=x[1].split("*")
        while ""in timu_rate:
            timu_rate.remove("")
        for i in range(0,len(timu_rate)):
            if int(timu_rate[i])==1 and timu_id[i] not in zhongdian_wrong:
                zhongdian_wrong.append(timu_id[i])
    return zhongdian_wrong

def offer_logic_fuxi_cuoti(user,chapter_name):
    chapter_en=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                      'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']


    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1= "select timu_id,timu_rate from user_logic_finish_zhongdian where user_name='%s' and chapter_name='%s'" %(user,chapter_name)
    cur.execute(sql1)
    test_zhongdian=cur.fetchall()


    sql2= "select timu_id,timu_rate from user_logic_finish_qianghua where user_name='%s' and chapter_name='%s'" %(user,chapter_name)
    cur.execute(sql2)
    test_qianghua=cur.fetchall()


    sql3= "select timu_id,timu_rate from user_logic_finish_ceshi where user_name='%s' and chapter_name='%s'" %(user,chapter_name)
    cur.execute(sql3)
    test_ceshi=cur.fetchall()



    zhongdian_wrong=find_wrong_id(test_zhongdian)
    qianghua_wrong=find_wrong_id(test_qianghua)
    ceshi_wrong=find_wrong_id(test_ceshi)


    wrong_list_mba=[]
    wrong_list_mba+=zhongdian_wrong
    wrong_list_gct=[]
    for x in qianghua_wrong: #强化重点暂时只从mba 抽取
        if x not in wrong_list_mba:
            wrong_list_mba.append(x)
    for x in ceshi_wrong:
        if x not in wrong_list_mba and 'g'not in x:
            wrong_list_mba.append(x)
        elif x not in wrong_list_mba and 'g' in x:
            wrong_list_gct.append(x)


    #错题序号 分两张表调用
    wrong_list_mba=sorted([int(i) for i in wrong_list_mba])
    wrong_list_gct=sorted([int(i[1:])for i in wrong_list_gct])

    #print(wrong_list_mba)
    #print(wrong_list_gct)


    index_1=chapter_ch.index(chapter_name)
    chapter_name_en=chapter_en[index_1]
    chapter_name_en_1=''
    if (chapter_name_en=="logic_mba_01luojiyuyan"):
        chapter_name_en_1="logic_gct_12yuyi"
    elif (chapter_name_en=="logic_mba_02mingtiluoji"):
        chapter_name_en_1="logic_gct_02mingtiluoji"
    elif (chapter_name_en=="logic_mba_03cixiangluoji"):
        chapter_name_en_1="logic_gct_01cixiangluoji"
    elif (chapter_name_en=="logic_mba_04luojiyingyong"):
        flag=1
    elif (chapter_name_en=="logic_mba_05yanyituili"):
        chapter_name_en_1="logic_gct_03luojiyanyi"
    elif (chapter_name_en=="logic_mba_06guonaluoji"):
        chapter_name_en_1="logic_gct_11guina"
    elif (chapter_name_en=="logic_mba_07jiashe"):
        chapter_name_en_1="logic_gct_05jiashe"
    elif (chapter_name_en=="logic_mba_08zhichi"):
        chapter_name_en_1="logic_gct_06zhichi"
    elif (chapter_name_en=="logic_mba_09xueruo"):
        chapter_name_en_1="logic_gct_07xueruo"
    elif (chapter_name_en=="logic_mba_10pingjia"):
        chapter_name_en_1="logic_gct_08pingjia"
    elif (chapter_name_en=="logic_mba_11jieshi"):
        chapter_name_en_1="logic_gct_09jieshi"
    elif (chapter_name_en=="logic_mba_12tuilun"):
        chapter_name_en_1="logic_gct_10tuilun"
    elif (chapter_name_en=="logic_mba_13bijiao"):
        flag=1
    elif (chapter_name_en=="logic_mba_14miaoshu"):
        chapter_name_en_1="logic_gct_13miaoshu"
    elif (chapter_name_en=="logic_mba_15zonghe"):
        chapter_name_en_1="logic_gct_14zonghe"


    #print(chapter_name_en)
    result_mba=[]
    result_gct=[]
    if wrong_list_mba!=[] and chapter_name_en_1!='':
        for x in wrong_list_mba:
            sql4="select id,question,answer,analysis,op_one,op_two,op_three,op_four,op_five from %s where id ='%s' "%(chapter_name_en,x)
            cur.execute(sql4)
            test_mba=cur.fetchall()[0]
            #print(test_mba)

            per_timu={}
            question=test_mba[1].replace('\r','').split('\n')
            new_qusetion=[]
            for char1 in question:
                char1=char1.strip()
                new_qusetion.append(char1)
            while ""in new_qusetion:
                new_qusetion.remove("")

            analysis=test_mba[3].replace('\r','').split('\n')
            new_analysis=[]
            for char2 in analysis:
                char2=char2.strip()
                new_analysis.append(char2)
            while ""in new_analysis:
                new_analysis.remove("")

            options=[]
            options.append(test_mba[4].strip())
            options.append(test_mba[5].strip())
            options.append(test_mba[6].strip())
            options.append(test_mba[7].strip())
            options.append(test_mba[8].strip())

            per_timu["id"]=test_mba[0]
            per_timu["question"]=new_qusetion
            per_timu["analysis"]=new_analysis
            per_timu["answer"]=test_mba[2]
            per_timu["options"]=options

            result_mba.append(per_timu)




    if wrong_list_gct!=[]:
        for x in wrong_list_gct:
            sql5="select id,question,answer,analysis,op_one,op_two,op_three,op_four from %s where id ='%s' "%(chapter_name_en_1,x)
            cur.execute(sql5)
            test_gct=cur.fetchall()[0]
            #print(test_mba)

            per_timu={}
            question=test_gct[1].replace('\r','').split('\n')
            new_qusetion=[]
            for char1 in question:
                char1=char1.strip()
                new_qusetion.append(char1)
            while ""in new_qusetion:
                new_qusetion.remove("")

            analysis=test_gct[3].replace('\r','').split('\n')
            new_analysis=[]
            for char2 in analysis:
                char2=char2.strip()
                new_analysis.append(char2)
            while ""in new_analysis:
                new_analysis.remove("")

            options=[]
            options.append(test_gct[4].strip())
            options.append(test_gct[5].strip())
            options.append(test_gct[6].strip())
            options.append(test_gct[7].strip())


            per_timu["id"]='g'+str(test_gct[0])
            per_timu["question"]=new_qusetion
            per_timu["analysis"]=new_analysis
            per_timu["answer"]=test_gct[2]
            per_timu["options"]=options

            result_gct.append(per_timu)

    flag=0
    if wrong_list_mba==[] and wrong_list_gct==[]:
        flag=2 #用户在该章节没有错题
    else:
        flag=1

    final_result={}
    final_result["flag"]=flag
    final_result["chapter_name"]=chapter_name
    final_result["content"]=result_mba+result_gct

    #print(len(final_result["content"]))

    jsondata = json.dumps(final_result, ensure_ascii=False)
    print jsondata

def offer_logic_fuxi_cuoti1():
    sys.exit(offer_logic_fuxi_cuoti(sys.argv[1],sys.argv[2]))

if __name__ == '__main__':

    offer_logic_fuxi_cuoti1()






