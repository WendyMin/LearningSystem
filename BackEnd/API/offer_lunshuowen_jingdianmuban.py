# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')



def offer_lunshuo_jingdianmuban(section):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1='''select content from lunshuowen_jingdianmuban where section_name='%s' ''' % (section)
    cur.execute(sql1)
    all= cur.fetchall()
    all_content=all[0][0]

    all_content=all_content.replace('\r','').split('\n')

    sql2='''select section_name2,section_name3 from lunshuowen_jingdianmuban_name where section_name1='%s' ''' % (section)
    cur.execute(sql2)
    all_name= cur.fetchall()
    section_name2=[]
    section_name3=[]

    for x in all_name:
        if x[0] not in section_name2:
            section_name2.append(x[0])
        if x[1] not in section_name3:
            section_name3.append(x[1])
    while ""in all_content:
        all_content.remove("")
    while '0'in section_name2:
        section_name2.remove("0")
    while '0' in section_name3:
        section_name3.remove("0")

    result_dict={}
    result_dict["all_content"]=all_content
    result_dict["section_name2"]=section_name2
    result_dict["section_name3"]=section_name3
    jsondata = json.dumps(result_dict, ensure_ascii=False)


    print(jsondata)








def offer_lunshuo_jingdianmuban1():
    sys.exit(offer_lunshuo_jingdianmuban(sys.argv[1]))

if __name__ == '__main__':
    #offer_lunshuo_jingdianmuban("拟题开头结尾")
    offer_lunshuo_jingdianmuban1()
