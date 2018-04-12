#-*-coding:utf-8-*-
import MySQLdb
import random
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )

def offer_class(username):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sqlllll = '''select * from logic_xingshi where user_name = "%s" and if_done = "%s"'''%(username,0)
    cur.execute(sqlllll)
    restlll = cur.fetchall()
    lens = len(restlll)
    qwe = ''
    if int(lens) == 0:
        qwe = 'logic_lunzheng'
    else:
        qwe = 'logic_xingshi'
    sqll = '''select * from %s where user_name = "%s" and if_done = "%s"'''%(qwe,username,0)
    cur.execute(sqll)
    rest = cur.fetchall()
    # print rest
    recommend_type = rest[0][1]
    sqll_lllll = '''select introduce_picture from logic_section where section = "%s" '''%(recommend_type)
    cur.execute(sqll_lllll)
    restlll = cur.fetchall()
    a_listl = []
    aa = str(restlll[0][0]).decode('utf-8').split('\r\n')
    for conf in aa:
        a_listl.append(conf)
    t_dict = {}
    t_dict["type"] = str(recommend_type).decode('utf-8')
    t_dict["introduce"] = a_listl
    jsondata = json.dumps(t_dict, ensure_ascii=False)
    print jsondata

def offer_classl():
    offer_class(sys.argv[1])
if __name__ == "__main__":
    # offer_class('lxq')
    offer_classl()