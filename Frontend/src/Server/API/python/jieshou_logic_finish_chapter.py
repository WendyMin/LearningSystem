#coding=utf-8
#用户自行决定是否进入下一章
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


def jieshou_logic_finish_chapter(user,chapter_name_ch,finish_flag):

    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()

    finish_ceshi_flag=0
    sql1_1="select user_name,chapter_name from user_logic_finish_ceshi"
    cur.execute(sql1_1)
    test_user_name=cur.fetchall()
    for x in test_user_name:
        if x[0] ==user and x[1]==chapter_name_ch:
            finish_ceshi_flag=1
            break

    chapter_en=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                      'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']

    index_ch=chapter_ch.index(chapter_name_ch)
    chapter_name_en=chapter_en[index_ch]

    sql2="select id from user_logic_finish_chapter where user_name='%s' "%(user)
    cur.execute(sql2)
    id=cur.fetchall()[0][0]
    #print(id)

    result={}

    if finish_ceshi_flag!=0:
        if finish_flag=='1': #用户决定完成本章学习
            sql3="""update user_logic_finish_chapter set %s ='%s' where id ='%d' """%(chapter_name_en,1,id) #更新数据库
            cur.execute(sql3)
            conn.commit()
            conn.close()
            result["update"]=1
        else:
            result["update"]=0

    else:
        result["update"]=2
    result["flag"]=finish_ceshi_flag

    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata

def jieshou_logic_finish_chapter1():
    sys.exit(jieshou_logic_finish_chapter(sys.argv[1],sys.argv[2],sys.argv[3]))

if __name__ == "__main__":
	#offer_logic_tongji("testdzh","逻辑语言")
	jieshou_logic_finish_chapter1()
	#jieshou_logic_finish_chapter("testdzh","逻辑语言",finish_flag=0)
