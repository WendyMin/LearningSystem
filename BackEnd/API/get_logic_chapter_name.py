# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')

def get_chapter_name(user):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()

    chapter_en=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                      'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']

    all_user_name=[]
    sql1_1="select user_name from user_logic_shuipingceshi"
    cur.execute(sql1_1)
    test_user_name=cur.fetchall()
    for x in test_user_name:
        if x[0] not in all_user_name:
            all_user_name.append(x[0])


    finish_flag=1
    if user in all_user_name:

        sql1="select * from user_logic_shuipingceshi where user_name='%s' "%(user)
        cur.execute(sql1)
        text=cur.fetchall()
        #print(text)
        length=len(text)
        text_rate=text[length-1][2:17]
        #print(text_rate)

        text_rate=[float(x) for x in text_rate]

        #print(text_rate)


        index_1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        data=[(rate,index)for rate ,index in zip(text_rate,index_1)]
        data.sort()
        sorted_rate=[rate for rate ,index in data]
        sorted_index=[index for rate,index in data]
        #print(sorted_index)

        sql2="select * from user_logic_finish_chapter where user_name='%s' "%(user)
        cur.execute(sql2)
        finish_list=cur.fetchall()
        length=len(finish_list)
        finish_list=finish_list[length-1][2:17]

        #print(finish_list)
        for x in sorted_index:
            if finish_list[x]==None or finish_list[x]=='0' or finish_list[x]=="":

                chapter_name_ch=chapter_ch[x]
                chapter_name_en=chapter_en[x]
                break

        return chapter_name_ch,chapter_name_en,finish_flag
    else:
        chapter_name_ch='none'
        chapter_name_en='none'
        finish_flag=0  #该用户没有水平测试
        return chapter_name_ch,chapter_name_en,finish_flag

'''
chapter_name_ch,chapter_name_en,finish_flag=get_chapter_name("sjdal")
print(chapter_name_en)
print(chapter_name_ch)
'''



