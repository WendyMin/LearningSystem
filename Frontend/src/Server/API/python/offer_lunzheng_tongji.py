# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')


def offer_lunzheng_tongji(user):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1="select article_name,xuanxiang from user_xiezuo_duoxuanti where user_name='%s' "%(user)
    cur.execute(sql1)
    all_info=cur.fetchall()
    count_year=len(all_info)
    #print(count_year)

    cuoxuan=[]
    louxuan=[]
    if len(all_info)==0:
        print "no user"
        return "no user"

    else:
        for x in all_info:
            per_cuoxuan=[]
            per_louxuan=[]

            error_type=[]
            article_name=x[0]
            xuanxiang=x[1].split("*")
            while "" in xuanxiang:
                xuanxiang.remove("")
            sql2="select error_type from lunzheng_zhenti_error where year='%s' "%(article_name)
            cur.execute(sql2)
            all_error_type=cur.fetchall()
            for x in all_error_type:
                if x[0] not in error_type:
                    error_type.append(x[0])


            for x in xuanxiang:
                if x not in error_type:
                    per_cuoxuan.append(x)
            for x in error_type:
                if x not in xuanxiang :
                    per_louxuan.append(x)

            louxuan+=per_louxuan
            cuoxuan+=per_cuoxuan


    all_xuanxiang=["概念混淆","条件缺失","推断不出","以偏概全","非黑即白","因果无关","目的达不到", \
    "论据不成立","条件不必要","类比不当","不当假设","自相矛盾","存在他因","措施不可行"]
    louxuanlv=[]
    cuoxuanlv=[]
    for i in range (len(all_xuanxiang)):
        louxuanlv.append(0)
        cuoxuanlv.append(0)


    for x in louxuan:
        for i in range(len(all_xuanxiang)):
            if x ==all_xuanxiang[i]:
                louxuanlv[i]+=1

    for x in cuoxuan:
        for i in range(len(all_xuanxiang)):
            if x ==all_xuanxiang[i]:
                cuoxuanlv[i]+=1
    #ouxuanlv=[(("%.2f"%(float(x)/count_year*100) )+"%")for x in louxuanlv ]
    #cuoxuanlv=[(("%.2f"%(float(x)/count_year*100) )+"%") for x in cuoxuanlv]
	

    result={}

    result["year"]=count_year
    result["louxuanlv"]=louxuanlv
    result["cuoxuanlv"]=cuoxuanlv

    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata




def offer_lunzheng_tongji1():
    sys.exit(offer_lunzheng_tongji(sys.argv[1]))

if __name__ == '__main__':
    offer_lunzheng_tongji1()
    #offer_lunzheng_tongji('testdzh')


