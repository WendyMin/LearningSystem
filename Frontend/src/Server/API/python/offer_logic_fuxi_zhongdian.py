#coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


def offer_logic_fuxi_zhongdian(user):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()

    chapter_en=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                      'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']

    #没学完某一章节 不会出现本章节的复习
    finish_chapter=[]

    user_flag=0  #该用户没在finish_chapter中有记录，没做过入口测试
    sql1_1="select user_name from user_logic_finish_chapter"
    cur.execute(sql1_1)
    test_user=cur.fetchall()
    #print(test_user)
    for x in test_user:

        if x[0]==user:
            user_flag=1
            break
    result={}
    #print(user_flag)

    if user_flag!=0:

        chapter_name=[]
        sql1="select chapter_name from user_logic_finish_ceshi where user_name='%s' "%(user)
        cur.execute(sql1)
        test_finish_chapter=cur.fetchall()
        for x in test_finish_chapter:
            if x[0] not in chapter_name:
                chapter_name.append(x[0])



        zhongdian_list=[]
        yiban_list=[]
        if chapter_name!=[]:
            for x in chapter_name:
                sql2="select timu_rate from user_logic_finish_ceshi where user_name='%s' and chapter_name='%s'"%(user,x)
                cur.execute(sql2)
                timu_rate=cur.fetchall() #最后一次测试结果 决定是否为重点复习
                length=len(timu_rate)
                #print(length)

                timu_rate=timu_rate[length-1][0]
                timu_rate=timu_rate.split("*")

                while ""in timu_rate:
                    timu_rate.remove("")
                timu_rate=[int(i) for i in timu_rate]

                if(timu_rate.count(1)>=round(len(timu_rate)/3.0)): #错误率大于1/3
                    zhongdian_list.append(x)
                else:
                    yiban_list.append(x)
                flag=1
        else:
            flag=0

        result["flag"]=flag
        result["zhongdian"]=zhongdian_list
        result["yiban"]=yiban_list

    else:
        result["flag"]=2
        result["zhongdian"]=[]
        result["yiban"]=[]

    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata

def offer_logic_zhongdian1():
    sys.exit(offer_logic_fuxi_zhongdian(sys.argv[1]))

if __name__ == '__main__':

    offer_logic_zhongdian1()

	#offer_logic_zhongdian('testdzh')



