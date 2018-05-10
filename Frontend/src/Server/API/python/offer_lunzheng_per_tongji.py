# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')


def offer_lunzheng_per_tongji(chapter_name,xuanxiang):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()

    sql1="select error_type from lunzheng_zhenti_error where year='%s' "%(chapter_name)
    cur.execute(sql1)
    error_type=[]
    all_info=cur.fetchall()
    for x in all_info:
        if x[0] not in error_type:
            error_type.append(x[0])

    xuanxiang=xuanxiang.split('*')
    while ""in xuanxiang:
        xuanxiang.remove("")

    cuoxuan=[]
    louxuan=[]
    zhengque=[]

    result={}

    for x in xuanxiang:
        if x not in error_type:
            cuoxuan.append(x)
        else:
            zhengque.append(x)
    for x in error_type:
        if x not in xuanxiang:
            louxuan.append(x)

    result["zhengque"]=zhengque
    result["louxuan"]=louxuan
    result["cuoxuan"]=cuoxuan

    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata


def offer_lunzheng_per_tongji1():
    sys.exit(offer_lunzheng_per_tongji(sys.argv[1],sys.argv[2]))

if __name__ == '__main__':
    #offer_lunzheng_per_tongji("管理类联考2011年真题","推断不出*类比不当*")
    offer_lunzheng_per_tongji1()



