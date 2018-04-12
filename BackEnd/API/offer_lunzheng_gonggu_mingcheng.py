# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def offer_all_year():
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql='''select year from lunzheng_analysis_gonggu_question'''
    cur.execute(sql)
    all= cur.fetchall()
    result=[]
    
    for x in all:
        result.append(x[0])
   
    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata



def off_l():
    sys.exit(offer_all_year())
if __name__ == "__main__":
    #offer_all_year()
    off_l()
