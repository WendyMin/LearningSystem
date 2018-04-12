# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def offer_lunzheng_zhaocuoxicuo_mengcheng():
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1='''select section_name from lunzheng_zhaocuoxicuo '''
    cur.execute(sql1)
    all= cur.fetchall()
    result=[]
    for x in all:
        result.append(x[0])


    jsondata = json.dumps(result, ensure_ascii=False)
    print (jsondata)

def  offer_lunzheng_zhaocuoxicuo_mengcheng1():
    sys.exit( offer_lunzheng_zhaocuoxicuo_mengcheng())

if __name__ == '__main__':
    offer_lunzheng_zhaocuoxicuo_mengcheng1()

    #offer_lunzheng_template_mengcheng()
