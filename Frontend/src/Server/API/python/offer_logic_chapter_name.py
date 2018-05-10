# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
import numpy as np
sys.setdefaultencoding('utf-8')

def get_chapter_name(user,xingshi_flag):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()


    chapter_en=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                      'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']


    chapter_ch_xingshi=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理']
    chapter_en_xingshi=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili']
    chapter_ch_lunzheng=['归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']
    chapter_en_lunzheng=['logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']

    all_user_name=[]
    sql1_1="select user_name from user_logic_shuipingceshi"
    cur.execute(sql1_1)
    test_user_name=cur.fetchall()
    for x in test_user_name:
        if x[0] not in all_user_name:
            all_user_name.append(x[0]) #得到所有的用户名

    finish_flag=1

    if user not in all_user_name:
        chapter_name_ch='none'
        chapter_name_en='none'
        finish_flag=0  #该用户没有水平测试


    else:
        text_rate=[]

        sql1="select * from user_logic_shuipingceshi where user_name='%s' "%(user)
        cur.execute(sql1)
        text=cur.fetchall()

        length=len(text)

        for x in text:
            text_rate.append(list(x[2:17]))

        new_text_rate=[]
        for x in text_rate:
            per_x=[float(y) for y in x]
            new_text_rate.append(per_x)

        new_text_rate=np.array(new_text_rate)
        rate_mean=np.mean(new_text_rate,axis=0) #计算多次平均
        #print(rate_mean)


        xingshi_rate=rate_mean[0:5]
        lunzheng_rate=rate_mean[5:15]
        index_1=[0,1,2,3,4]
        index_2=[0,1,2,3,4,5,6,7,8,9]



        data_xingshi=[(rate_per,index_per)for (rate_per,index_per) in zip(xingshi_rate,index_1)]
        data_xingshi.sort()

        sorted_xingshi_index=[index for rate,index in data_xingshi]
        sorted_xingshi_index.reverse() #形式从易到难

        data_lunzheng =[(rate_per,index_per)for (rate_per,index_per) in zip(lunzheng_rate,index_2)]
        data_lunzheng.sort()

        sorted_lunzheng_index=[index for rate,index in data_lunzheng]  #论证从难到易
        #print(sorted_xingshi_index)
        #print(sorted_lunzheng_index)



        sql2="select * from user_logic_finish_chapter where user_name='%s' "%(user)
        cur.execute(sql2)
        finish_list=cur.fetchall()
        length=len(finish_list)
        #print("???",length)
        finish_xingshi_list=finish_list[length-1][2:7]
        finish_lunzheng_list=finish_list[length-1][7:17]

        if xingshi_flag=='1':
            for x in sorted_xingshi_index:
                if finish_xingshi_list[x]==None or finish_xingshi_list[x]=='0' or finish_xingshi_list[x]=="":

                    chapter_name_ch=chapter_ch_xingshi[x]
                    chapter_name_en=chapter_en_xingshi[x]
                    break

        else:
            for x in sorted_lunzheng_index:

                if finish_lunzheng_list[x]==None or finish_lunzheng_list[x]=='0' or finish_lunzheng_list[x]=="":
                    chapter_name_ch=chapter_ch_lunzheng[x]
                    chapter_name_en=chapter_en_lunzheng[x]
                    break

    result={}
    result["chapter_name_ch"]=chapter_name_ch
    #result["chapter_name_en"]=chapter_name_en
    result["flag"]=finish_flag
    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata

#get_chapter_name("testdzh",xingshi_flag=0)

def get_chapter_name1():
    sys.exit(get_chapter_name(sys.argv[1],sys.argv[2]))

if __name__ == "__main__":

     get_chapter_name1()


