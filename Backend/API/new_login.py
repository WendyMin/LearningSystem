# coding=utf-8
from __future__ import division
import MySQLdb
import json
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

#state ：success or none or wrong    success:用户名和密码都对 none:没有该用户名 wrong：有用户名但密码错误
#newTo: success 时找到用户是否还尚未学习过的科目
def login_new(user_name, pwd):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql = "select pwd from user where user_name = '%s'" % (user_name)
    cur.execute(sql)
    pwdData = cur.fetchall()  #有该用户 则len(pawData)=1,否则=0
    state = ''
    newTo1=[]
    if len(pwdData)==0:
        state='none'            #没有该用户
    elif len(pwdData)==1:
        if pwdData[0][0] == pwd: #该用户密码正确
             state='success'
             sql1 = "select if_test from user WHERE user_name = '%s'" % (user_name) #r读取用户
             cur.execute(sql1)
             result = cur.fetchall()

             if result[0][0] == 0 or result[0][0]==None:#判断是否做过英语测试  0或者None代表无，1代表有
                 newTo1.append('eng')

             sql_logic1="select * from logic_lunzheng"
             cur.execute(sql_logic1)
             all_data1=cur.fetchall()
             names_lunzheng=[]
             for x in all_data1:
                 if x[2] not in names_lunzheng:
                     names_lunzheng.append(x[2])

             sql_logic2="select * from logic_xingshi "
             cur.execute(sql_logic2)
             all_data2=cur.fetchall()
             names_xingshi=[]
             for x in all_data2:
                 if x[2] not in names_lunzheng:
                     names_xingshi.append(x[2])

             if user_name not in names_lunzheng and user_name not in names_xingshi:
                 newTo1.append('log')

        else: #密码错误
            state='wrong'
    newTo1.append('wri');newTo1.append('mat')
    #对于state=success  给出正确的newTo, 如果所有科目都学过，newTo=['none']
    #state=none or wrong 时，newTo=['english','logic']  只有正确登陆后才能看到正确的进度，数学和写作暂未考虑
    a_dict={}
    # if state=='success':
    #     dict['state']=state
    #     if len(newTo1)==0:
    #         dict['newTo']=['none']
    #     else:
    #         dict['newTo']=newTo1
    # elif state=='none'or state =='wrong' :
    #     dict['state']=statee
    #     dict['newTo']=['english','logic']
    a_dict['state'] = str(state).decode('utf-8')
    a_dict['newTo'] = newTo1
    cur.close()
    conn.close()
    jsondata = json.dumps(a_dict, ensure_ascii=False)

    print(jsondata)


def loginl():
	sys.exit(login_new(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
	loginl()

    # login_new('lq','tt')

