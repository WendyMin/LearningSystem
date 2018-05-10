#coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
import get_logic_chapter_name as chapter_name

def mba_zidian(all_timu):
    per_timu={}

    per_timu["id"]=all_timu[0]
    question=all_timu[1].replace('\r','').split('\n')

    new_qusetion=[]
    for char1 in question:
        char1=char1.strip()
        new_qusetion.append(char1)
    while ""in new_qusetion:
        new_qusetion.remove("")
    per_timu['question']=new_qusetion
    per_timu['answer']=all_timu[2]
    analysis=all_timu[3].replace('\r','').split('\n')
    new_analysis=[]
    for char2 in analysis:
        char2=char2.strip()
        new_analysis.append(char2)
    while ""in new_analysis:
        new_analysis.remove("")
    per_timu["analysis"]=new_analysis

    per_timu["op_one"]=all_timu[4]
    per_timu["op_two"]=all_timu[5]
    per_timu["op_three"]=all_timu[6]
    per_timu["op_four"]=all_timu[7]
    per_timu["op_five"]=all_timu[8]
    return per_timu

def gct_zidian(all_timu):
    per_timu={}

    per_timu["id"]="g"+str(all_timu[0])
    question=all_timu[1].replace('\r','').split('\n')
    new_qusetion=[]
    for char1 in question:
        char1=char1.strip()
        new_qusetion.append(char1)
    per_timu['question']=new_qusetion
    per_timu['answer']=all_timu[2]
    analysis=all_timu[3].replace('\r','').split('\n')
    new_analysis=[]
    for char2 in analysis:
        char2=char2.strip()
        new_analysis.append(char2)
    per_timu["analysis"]=new_analysis

    per_timu["op_one"]=all_timu[4]
    per_timu["op_two"]=all_timu[5]
    per_timu["op_three"]=all_timu[6]
    per_timu["op_four"]=all_timu[7]

    return per_timu




def offer_logic_ceshi(user):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()

    chapter_name_ch,chapter_name_en,shuipingceshi_flag=chapter_name.get_chapter_name(user)

    #chapter_name_en="logic_mba_15zonghe"
    #chapter_name_ch="综合"
    #print(chapter_name_en)
    #print(chapter_name_ch)
    zhongdian_flag=0
    qianghua_flag=0
    sql1_1_1="select user_name ,chapter_name from user_logic_finish_zhongdian"
    cur.execute(sql1_1_1)
    test_zhongdian_user=cur.fetchall()
    for x in test_zhongdian_user:
        if x[0]==user and x[1]==chapter_name_ch:
            zhongdian_flag=1

    sql1_1_2="select user_name ,chapter_name from user_logic_finish_qianghua"
    cur.execute(sql1_1_2)
    test_qianghua_user=cur.fetchall()
    for x in test_qianghua_user:
        if x[0]==user and x[1]==chapter_name_ch:
            qianghua_flag=1
    result_1={}
    if shuipingceshi_flag==1 and zhongdian_flag==1 and qianghua_flag==1:
        sql1='''select timu_id from user_logic_finish_zhongdian where user_name='%s'and chapter_name='%s' '''%(user,chapter_name_ch)
        cur.execute(sql1)

        zhongdian_id=cur.fetchall()
        length1=len(zhongdian_id)
        zhongdian_id=zhongdian_id[length1-1][0]
        zhongdian_id=zhongdian_id.split('*')
        while ""in zhongdian_id:
            zhongdian_id.remove("")
        zhongdian_id_new=[int(i) for i in zhongdian_id]
        #print(zhongdian_id_new)


        qianghua_id=[]
        if (chapter_name_ch!="评价"):
            sql2='''select timu_id from user_logic_finish_qianghua where user_name='%s'and chapter_name='%s' '''%(user,chapter_name_ch)
            cur.execute(sql2)

            qianghua_id=cur.fetchall()
            length2=len(qianghua_id)
            qianghua_id=qianghua_id[length2-1][0]
            qianghua_id=qianghua_id.split('*')
            while ""in qianghua_id:
                qianghua_id.remove("")
            qianghua_id_new=[int(i) for i in qianghua_id]
            #print(qianghua_id_new)


        finish_id=zhongdian_id+qianghua_id
        finish_id=[int(x) for x in finish_id]
        finish_id=sorted(finish_id)
        #print(finish_id)


        sql3='''select id,nanyi from  %s  ''' %(chapter_name_en)
        cur.execute(sql3)
        all_id=cur.fetchall()
        #print(all_id)

        yi_list=[]
        zhong_list=[]
        nan_list=[]

        for x in all_id:
            if x[0] not in finish_id:
                if x[1]=="易":
                    yi_list.append(int(x[0]))
                elif x[1]=="中":
                    zhong_list.append(int(x[0]))
                elif x[1]=="难":
                    nan_list.append(int(x[0]))
        #print(yi_list)
        #print(zhong_list)
        #print(nan_list)

        chapter_name_en_1="none"
        yi_gct_id=[]
        zhong_gct_id=[]
        nan_gct_id=[]
        yi_gct_id2=[]
        zhong_gct_id2=[]
        nan_gct_id2=[]
        flag=0
        if ((len(yi_list)<5) or (len(zhong_list)<10)or (len(nan_list)<5)):
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

            if chapter_name_en_1!="none":
                sql4='''select id,nanyi from  %s  ''' %(chapter_name_en_1)
                cur.execute(sql4)
                all_gct=cur.fetchall()
                for x in all_gct:
                    if x[1]=="易":
                        yi_gct_id.append(int(x[0]))
                    elif x[1]=="中":
                        zhong_gct_id.append(int(x[0]))
                    elif x[1]=="难":
                        nan_gct_id.append(int(x[0]))


        #print(yi_gct_id)
        #print(zhong_gct_id)
        #print(nan_gct_id)


        yi_mba_select=[]
        zhong_mba_select=[]
        nan_mba_select=[]
        yi_gct_select=[]
        zhong_gct_select=[]
        nan_gct_select=[]

        len_yi_list=len(yi_list)
        len_zhong_list=len(zhong_list)
        len_nan_list=len(nan_list)


        if len_yi_list<5:
            yi_mba_select=yi_list
            if len(yi_gct_id)!=0:
                if len(yi_gct_id)>(5-len_yi_list):
                    yi_gct_select=random.sample(yi_gct_id,5-len_yi_list)
                else:
                    yi_gct_select=yi_gct_id
        else:
            yi_mba_select=random.sample(yi_list,5)

        if len_zhong_list<10:
            zhong_mba_select=zhong_list
            if len(zhong_gct_id)!=0:
                if len(zhong_gct_id)>(10-len_zhong_list):
                    zhong_gct_select=random.sample(zhong_gct_id,10-len_zhong_list)
                else:
                    zhong_gct_select=zhong_gct_id
        else:
            zhong_mba_select=random.sample(zhong_list,10)


        if len_nan_list<5:
            nan_mba_select=nan_list
            if len(nan_gct_id)!=0:
                if len(nan_gct_id)>(5-len_nan_list):
                    nan_gct_select=random.sample(nan_gct_id,5-len_nan_list)
                else:
                    nan_gct_select=nan_gct_id
        else:
            nan_mba_select=random.sample(nan_list,5)
        '''
        print("select")
        print(yi_mba_select)
        print(zhong_mba_select)
        print(nan_mba_select)
        print(yi_gct_select)
        print(zhong_gct_select)
        print(nan_gct_select)
        '''

        result_yi=[]
        if len(yi_mba_select)!=0:
            for x in yi_mba_select:
                sql5='''select* from  %s where id='%s' ''' %(chapter_name_en,x)
                cur.execute(sql5)
                all_timu=cur.fetchall()[0]
                per_timu=mba_zidian(all_timu)
                result_yi.append(per_timu)


        if (len(yi_gct_select)!=0) and (chapter_name_en_1!='none'):
            for x in yi_gct_select:
                sql5_1='''select* from  %s where id='%s' ''' %(chapter_name_en_1,x)
                cur.execute(sql5_1)
                all_timu=cur.fetchall()[0]
                per_timu=gct_zidian(all_timu)
                result_yi.append(per_timu)


        result_zhong=[]
        if len(zhong_mba_select)!=0:
            for x in zhong_mba_select:
                sql6='''select* from  %s where id='%s' ''' %(chapter_name_en,x)
                cur.execute(sql6)
                all_timu=cur.fetchall()[0]
                per_timu=mba_zidian(all_timu)
                result_zhong.append(per_timu)


        if (len(zhong_gct_select)!=0) and (chapter_name_en_1!='none'):
            for x in zhong_gct_select:
                sql6_1='''select* from  %s where id='%s' ''' %(chapter_name_en_1,x)
                cur.execute(sql6_1)
                all_timu=cur.fetchall()[0]
                per_timu=gct_zidian(all_timu)
                result_zhong.append(per_timu)



        result_nan=[]
        if len(nan_mba_select)!=0:
            for x in nan_mba_select:
                sql6='''select* from  %s where id='%s' ''' %(chapter_name_en,x)
                cur.execute(sql6)
                all_timu=cur.fetchall()[0]
                per_timu=mba_zidian(all_timu)
                result_nan.append(per_timu)


        if (len(nan_gct_select)!=0) and (chapter_name_en_1!='none'):
            for x in nan_gct_select:
                sql6_1='''select* from  %s where id='%s' ''' %(chapter_name_en_1,x)
                cur.execute(sql6_1)
                all_timu=cur.fetchall()[0]
                per_timu=gct_zidian(all_timu)
                result_nan.append(per_timu)


        final_result=[]
        final_result.append(result_yi)
        final_result.append(result_zhong)
        final_result.append(result_nan)

        result_1["timu"]=final_result
        result_1["chapter_name"]=chapter_name_ch
        result_1["flag"]=1




    elif shuipingceshi_flag==0:
        result_1["timu"]=[]
        result_1["chapter_name"]=[]
        result_1["flag"]=2

        #print("该用户未做过水平测试")
    elif shuipingceshi_flag==1 and zhongdian_flag==0:
        result_1["timu"]=[]
        result_1["chapter_name"]=[]
        result_1["flag"]=3
        #print("该用户已完成水平测试，但未完成该章节的重点题型")
    elif shuipingceshi_flag==1 and zhongdian_flag==1 and qianghua_flag==0:
        result_1["timu"]=[]
        result_1["chapter_name"]=[]
        result_1["flag"]=4

        #print("该用户已完成水平测试和重点体型，但未完成该章节的强化题型")
    jsondata = json.dumps(result_1, ensure_ascii=False)
    print jsondata

def offer_logic_ceshi1():
    sys.exit(offer_logic_ceshi(sys.argv[1]))
if __name__ == "__main__":

    #offer_logic_ceshi('kadl')
    offer_logic_ceshi1()




