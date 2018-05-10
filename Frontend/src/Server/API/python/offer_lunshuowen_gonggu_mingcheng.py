# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

#提供所有真题的名字 如 xxx年管理类联考
#前端无需提供参数

def offer_lunshuowen_all_year_mingcheng():
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql='''select year from lunshuowen_gonggu'''
    cur.execute(sql)
    all= cur.fetchall()

    result=[]

    for x in all:
        result.append(x[0])



    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata


def offer_lunshuowen_all_year_mingcheng1():
    sys.exit(offer_lunshuowen_all_year_mingcheng())

if __name__ == "__main__":
    offer_lunshuowen_all_year_mingcheng1()
    #offer_lunshuowen_all_year_mingcheng()

