#-*- coding:utf-8 -*-
import MySQLdb
import json
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def show_user_info(user_name):
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    sql = 'select * from user WHERE user_name = "%s"' % (user_name)
    cur.execute(sql)
    user = cur.fetchall()
    user=user[0]
    # print(user)

    user_info={};user_info1=[]
    count=0
    user_info['user_name']=user_name
    for x in user:
        #print(count,x)
        if (count==2):
            user_info['user_pwd']=x
        elif (count==3):
            user_info['user_email'] = x
        elif (count==4):
            user_info['user_phone']=x
        count += 1


    user_info1.append(user_info)
    jsondata = json.dumps(user_info1, ensure_ascii=False)
    print(jsondata)
def show_user_info_l():
    sys.exit(show_user_info(sys.argv[1]))
if __name__ == '__main__':
    # show_confuse_sentence('lxq')
    show_user_info_l()