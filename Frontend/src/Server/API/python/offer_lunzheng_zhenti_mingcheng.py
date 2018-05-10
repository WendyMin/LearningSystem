# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def f1():
    conn = MySQLdb.Connect(host='127.0.0.1',port=3306,user='root',passwd='123456',db='gyc_f_e',charset='utf8')
    cursor = conn.cursor()
    sql='''select year from lunzheng_analysis_zhenti'''
    cursor.execute(sql)
    all= cursor.fetchall()
    result=[]

    for x in all:
        result.append(x[0])

    

    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata


def f2():
    sys.exit(f1())
    
if __name__ == '__main__':
    f2()
