#-*-coding:utf-8-*-
import MySQLdb
import random
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )

def show_logic_type_divide(username):
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
    # print recommend_type
    sql_lll = '''select * from logic_type_divide where belongto = "%s"'''%(recommend_type)
    cur.execute(sql_lll)
    rest_l = cur.fetchall()
    # print rest_l
    type_lll = []
    for content in rest_l:
        type_lll.append(content[1])
    # print type_lll
    # for i in type_lll:
    #     print i
    result_list = []
    # print len(type_lll)
    for con in type_lll:
        a_listl=[]
        dict_a = {}
        sql = '''select introduce_picture from logic_type_divide where belongto = "%s" and type = "%s" ''' % (recommend_type,con)
        cur.execute(sql)
        res = cur.fetchall()  #得到一张表中所有数据
        # print res[0][0]
        aa = str(res[0][0]).decode('utf-8').split('\r\n')
        # print aa
        for cony in aa:
            a_listl.append(cony)
        dict_a['type'] = str(con).decode('utf-8')
        dict_a['introduce'] = a_listl
        result_list.append(dict_a)
    # print res
    # dictl={}
    # dictl["introduce"] = res[0][0]
    jsondata = json.dumps(result_list, ensure_ascii=False)

    print(jsondata)

def show_logic_type_divide1():
    sys.exit(show_logic_type_divide(sys.argv[1]))
if __name__=='__main__':
    show_logic_type_divide1()
    # show_logic_type_divide('lxq')

