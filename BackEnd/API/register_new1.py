# coding=utf-8

import MySQLdb
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


def register(user_name,pwd, email, phone):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    sql1 = "SELECT * FROM user WHERE  user_name = '%s'" % (user_name)  # 查看用户名是否已存在
    sql2 = "SELECT * FROM user WHERE  email = '%s'" % (email)  # 查看邮箱是否已存在
    sql3="""SELECT COUNT(*) FROM user"""

    cur.execute(sql3)
    id=cur.fetchone()[0]+1
    print(id)


    cur.execute(sql1)
    userTest = cur.fetchall()
    if len(userTest) > 0:
        print(1)
        return 1
    # 判断邮箱是否存在
    cur.execute(sql2)
    emailTest = cur.fetchall()
    if len(emailTest) > 0:
        print(2)
        return 2
    if len(userTest) == 0 and len(emailTest) == 0:

        sql4="insert into user(id,user_name,pwd,email,phone) values (%d,'%s','%s','%s','%s')" %(id,user_name,pwd,email,phone)
        cur.execute(sql4)

        conn.commit()
        return 0

    conn.close()







def registerl():
    sys.exit(register(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4]))

if __name__ == '__main__':
    #register(user_name='1rr1',pwd='salkjfl',email='skalk@qq.com',phone='9999')
    registerl()

