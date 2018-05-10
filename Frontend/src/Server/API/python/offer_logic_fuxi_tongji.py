# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')

def offer_logic_fuxi_tongji(user):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    # 是否需要考虑用户任意章节都没复习的情况？？？

    sql="select id,chapter_name from user_logic_fuxi_cuoti where user_name='%s'"%(user)
    cur.execute(sql)
    test=cur.fetchall()
    #print(test)

    chapter_name=[]
    for x in test:
        if x[1] not in chapter_name:
            chapter_name.append(x[1])
    #print(chapter_name)
    length=len(chapter_name)

    count=[0 for i in range(0,length)]
    #print(count)

    for i in range(0,length):
        for x in test:
            if x[1] ==chapter_name[i]:
                count[i]+=1
    #print(count)


    result={}
    result["chapter_name"]=chapter_name
    result["count"]=count
    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata

def offer_logic_fuxi_tongji1():
    sys.exit(offer_logic_fuxi_tongji(sys.argv[1]))
if __name__ == "__main__":

    offer_logic_fuxi_tongji1()

    



