# coding=utf-8
from __future__ import division
import MySQLdb
import json
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


#只判断该用户名是否存在！

def login_new(user_name, pwd):

    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql = "select pwd from user where user_name = '%s'" % (user_name)
    cur.execute(sql)
    pwdData = cur.fetchall()  #有该用户 则len(pawData)=1,否则=0
    state = ''
    newto=[]


    if len(pwdData)==0:
        state='none'            #没有该用户
    elif len(pwdData)==1:
        if pwdData[0][0] == pwd: #该用户密码正确
             state='success'
             sql_logic="select id from user_logic_shuipingceshi where user_name = '%s'" % (user_name)
             cur.execute(sql_logic)
             logic_data=cur.fetchall()
             if len(logic_data)==0:
                 newto.append('logic')


        else: #密码错误
            state='wrong'

    if state=="none" or state=='wrong':
        newto.append('logic')
    #print(newto)

    newto_1=[0,0,0,0]
    if 'logic' in newto:
        newto_1[1]=1

    a_dict={}

    a_dict['state']=state
    a_dict['newto']=newto_1

    conn.close()
    jsondata = json.dumps(a_dict, ensure_ascii=False)

    print(jsondata)


def loginl():
	sys.exit(login_new(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
	loginl()

    #login_new('zzz','111')
