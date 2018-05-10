#coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


def offer_logic_ceshi_result(user,chapter_name_ch):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()

    #print(chapter_name_en)
    chapter_en=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                      'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']

    index_ch=chapter_ch.index(chapter_name_ch)
    chapter_name_en=chapter_en[index_ch]

    #之后还要考虑 chaper_name=none的情况！

    index_1=chapter_name_ch.index(chapter_name_ch)
    #print(index_1)

    sql1="select id,user_name ,chapter_name from user_logic_finish_ceshi "
    cur.execute(sql1)
    test_user_name=cur.fetchall()

    user_flag=0  #判断测试表里有木有该用户、该章节数据
    finish_flag=0 #判断该用户本章节测试结果 是否满足大于 2/3

    all_user_name=[]
    id=0
    for x in test_user_name:
        if x[1]==user and x[2]==chapter_name_ch:
            user_flag=1   #该用户完成了本章节测试题
            id=int(x[0])  #循环结束会是最后一次测试的id
            #print(id)
    #print(id)
    length_total=0;length_wrong=0;length_right=0
    if user_flag==1:
        sql2="select timu_rate from user_logic_finish_ceshi where id ='%d' "%(id)
        cur.execute(sql2)
        timu_rate=cur.fetchall()
        length=len(timu_rate)
        timu_rate=timu_rate[length-1][0] #最新一次测试的结果

        timu_rate=timu_rate.split("*")
        while ""in timu_rate:
            timu_rate.remove("")
        new_timu_rate=[int(x) for x in timu_rate]  #1表示错 0表示对
        #print(new_timu_rate)

        length_total=len(new_timu_rate)
        length_right=new_timu_rate.count(0)
        length_wrong=new_timu_rate.count(1)

        if (length_right>=round(length_total*2.0/3.0)):
            finish_flag=1

    result={}
    if user_flag==1 and finish_flag==1:#完成本章测试题 且满足正确率要求
        #print(chapter_en[index_1])
        sql3="""update user_logic_finish_chapter set %s ='%s' where id ='%d' """%(chapter_en[index_1],finish_flag,id) #更新数据库
        cur.execute(sql3)
        conn.commit()
        conn.close()

        result["flag"]=1
        result["total_timu"]=length_total
        result["right_timu"]=length_right
        result["wrong_timu"]=length_wrong
    elif user_flag==1 and finish_flag==0: #完成本章节测试 但错题太多
        result["flag"]=2
        result["total_timu"]=length_total
        result["right_timu"]=length_right
        result["wrong_timu"]=length_wrong
    elif user_flag==0: #用户没有完成本章节测试
        result["flag"]=3
        result["total_timu"]=length_total
        result["right_timu"]=length_right
        result["wrong_timu"]=length_wrong

    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata

def offer_logic_ceshi_result1():
    sys.exit(offer_logic_ceshi_result(sys.argv[1],sys.argv[2]))

if __name__ == "__main__":
	#offer_logic_ceshi_result("testdzh",'命题逻辑')
	offer_logic_ceshi_result1()
