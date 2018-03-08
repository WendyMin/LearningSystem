#-*-coding:utf-8-*-
import MySQLdb
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )
#logic 接口 接收前端返回 测试部分： 用户名+大类+小类+ [题号]+[题目正确与否，0表正确，1表错误]
#接收后按行存入表中,行数目=len（题号）

def get_test_per_question(userid,type1,type2,timu_list,accuracy_list):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    print 'a'
    sql='select * from logic_storage_zhongdian_type'
    len=cur.execute(sql)  #决定下一次插入表中的id
    count_timu=0
    for x in timu_list:
        count_timu+=1


    for i in range(0,count_timu):
        cur.execute("insert into logic_storage_zhongdian_type values(%s,%s,%s,%s,%s,%s)", (len+1+i, userid,type1,type2,timu_list[i],accuracy_list[i]))
        print 'b'

    cur.close()
    conn.commit()
    conn.close()


#get_test_per_question(userid='ergou',type1='logic_zonghe',type2='完成段落',timu_list=[4,9,10],accuracy_list=[0,1,0])
def get_test_per_question1():
    username = str(sys.argv[1]).decode('utf-8')
    print 'c'
    print username
    type_1 = sys.argv[2].decode('utf-8')
    type_2 = sys.argv[3].decode('utf-8')
    print type_1
    print type_2
    aa = sys.argv[4::]
    tim_listl = []
    for cont in aa[:int(len(aa)/2):]:
        tim_listl.append(int(cont))
    print tim_listl
    accuracyl=[]
    for coy in aa[int(len(aa)/2)::]:
        accuracyl.append(int(coy))
    print accuracyl
    sys.exit(get_test_per_question(username,type_1,type_2,tim_listl,accuracyl))
    print 'd'
if __name__ == '__main__':
    print 'w'
    get_test_per_question1()
    # get_test_per_question(userid='lxq',type1='命题逻辑',type2='推理选言',timu_list=[1,2,3,4],accuracy_list=[0,1,0,0])
