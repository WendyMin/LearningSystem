#-*-coding:utf-8-*-
import MySQLdb
import random
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )

def offer_title(username):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sqlllll = '''select * from logic_xingshi where user_name = "%s" and if_done = "%s"'''%(username,0)
    cur.execute(sqlllll)
    restlll = cur.fetchall()
    title = ''
    l = len(restlll)
    if l != 0:
        title = restlll[0][1]
    else:
        sqllllool = '''select * from logic_lunzheng where user_name = "%s" and if_done = "%s"'''%(username,0)
        cur.execute(sqllllool)
        restlllo = cur.fetchall()
        ll = len(restlllo)
        if ll != 0:
            title = restlllo[0][1]
        else:
            title = "课程已经结束".decode('utf-8')
    title_dict = {}
    title_dict['course'] = title
    jsondata = json.dumps(title_dict, ensure_ascii=False)
    print jsondata
def offer_title_l():
    sys.exit(offer_title(sys.argv[1]))
if __name__ == '__main__':
    # offer_title('lxq')
    offer_title_l()