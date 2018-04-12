#-*- coding:utf-8 -*-
import MySQLdb
import json
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#前端返回三个参数：user_name,[type1,type2],[wrong_rate1,wrong_rate2]
#每次执行该函数，向数据库插入一条数据 数据库：id type wrong_rate,userid
def create_user_sentence(username,type_list,wrong_rate_list):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    res_xingshi = []
    res_lunzheng = []
    for i in range(len(type_list)):
        a = (type_list[i],wrong_rate_list[i])
        if str(type_list[i]).decode('utf-8') == '命题逻辑' or str(type_list[i]).decode('utf-8') == '词项逻辑' or \
        str(type_list[i]).decode('utf-8') == '逻辑应用' or str(type_list[i]).decode('utf-8') == '演绎推理':
            res_xingshi.append(a)
        else:
            res_lunzheng.append(a)
    # print 'res_lunzheng',res_lunzheng
    # print 'res_xingshi',res_xingshi
    res_lunzheng_dict = dict(res_lunzheng)
    res_xingshi_dict = dict(res_xingshi)
    # print 'res_xingshi_dict',res_xingshi_dict
    # print 'res_lunzheng_dict',res_lunzheng_dict
    res_lunzheng_order = sorted(res_lunzheng_dict.iteritems(),key=lambda asd:asd[1],reverse=True)
    res_xingshi_order = sorted(res_xingshi_dict.iteritems(),key=lambda asd:asd[1],reverse=True)
    # print 'res_lunzheng_order',res_lunzheng_order
    # print 'res_xingshi_order',res_xingshi_order
    #ma = max(wrong_rate_list)
    # ind = wrong_rate_list.index(ma)
    # entry = type_list[ind]
    # sql_cun = "update user set logic_entry='%s' where user_name = '%s'" % (entry,username)
    # cur.execute(sql_cun)
    for i in range(len(res_xingshi_order)):
        cur.execute("insert into logic_xingshi values(%s,%s,%s,%s,%s)", (0,res_xingshi_order[i][0],username,0,res_xingshi_order[i][1]))
    for i in range(len(res_lunzheng_order)):
        cur.execute("insert into logic_lunzheng values(%s,%s,%s,%s,%s)", (0,res_lunzheng_order[i][0],username,0,res_lunzheng_order[i][1]))
    cur.close()
    conn.commit()
    conn.close()
def create_user_sentence_l():
    uesr_name=str(sys.argv[1]).decode('utf-8')
    aa = sys.argv[2::]
    type_l = aa[:int((len(aa)/2)):]
    wrong_list = aa[int(len(aa)/2)::]
    type_ll = []
    wrong_listl = []
    for i in type_l:
        type_ll.append(str(i).decode('utf-8'))
    for j in wrong_list:
        wrong_listl.append(str(j).decode('utf-8'))
    sys.exit(create_user_sentence(uesr_name,type_ll,wrong_listl))
if __name__ == '__main__':
    create_user_sentence_l()
    # create_user_sentence('lxq',['词项逻辑','削弱','命题逻辑','归纳推理'],[0.2,0.7,0.5,0.9])

