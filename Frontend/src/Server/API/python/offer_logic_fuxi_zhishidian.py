#coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


def offer_logic_zhishidian_dalei(chapter_name):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()

    sql11="select introduce from logic_mba_dalei where section='%s' "%(chapter_name)

    cur.execute(sql11)
    text=cur.fetchall()[0][0]
    text=text.replace('\r','').split('\n')
    new_text=[]
    for x in text:
        x=x.strip()
        new_text.append(x)
    while "" in new_text:
        new_text.remove("")


    result_dict={}
    result_dict["content"]=new_text


    sql22="select type,introduce from logic_mba_xiaolei where belongto='%s'" %(chapter_name)
    cur.execute(sql22)
    text1=cur.fetchall()
    type_list=[]
    for x in text1:
        type_list.append(x[0])


    xiaolei=[]
    for x in text1:

        name=x[0]

        xiaolei_dict={}
        new_xiaolei_x=[]
        xiaolei_x=x[1].replace('\r','').split('\n')

        for x in xiaolei_x:
            x=x.strip()
            new_xiaolei_x.append(x)
        while ""in new_xiaolei_x:
            new_xiaolei_x.remove("")


        xiaolei.append(new_xiaolei_x)

        result_dict["chapter_name"]=chapter_name
        result_dict["xiaolei"]=xiaolei
        result_dict["shunxu"]=type_list




    jsondata = json.dumps(result_dict, ensure_ascii=False)
    print jsondata


def offer_logic_zhishidian_dalei1():
    sys.exit(offer_logic_zhishidian_dalei(sys.argv[1]))

if __name__ == '__main__':
    offer_logic_zhishidian_dalei1()

    #offer_logic_zhishidian_dalei("逻辑语言")
