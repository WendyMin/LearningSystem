import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
# Create your views here.
def test_word():
    conn = MySQLdb.Connect(host = '127.0.0.1',user = 'root', passwd = '123456', db = 'gyc_f_e', port = 3306,charset='utf8')
    cur = conn.cursor()
    idlist = []
    count = 0
    id = 0
    while (count<160):
        id = random.randint(1,3723)
        if id not in idlist:
            idlist.append(id)
            count = count + 1
        else:
            pass
    #print idlist,len(idlist)
    JsonData_list = []
    for i in range(40):
        choice = {}
        a = {}
        b = [0,1,2,3]
        random.shuffle(b)
        ind = b.index(0)
        sql = "select word,yisi1 from kaoyan_word WHERE id = %d" % (idlist[i])
        sql_sub = "select word,yisi1 from gaokao_word WHERE id in (%d,%d,%d)" % \
         (idlist[i+40],idlist[i+80],idlist[i+120])
        cur.execute(sql)
        data = cur.fetchall()
        cur.execute(sql_sub)
        data_sub = cur.fetchall()
        a['0'] = data[0][1]
        a['1'] = data_sub[0][1]
        a['2'] = data_sub[1][1]
        a['3'] = data_sub[2][1]
        # b = [data[0][1],data_sub[0][1],data_sub[1][1],data_sub[2][1]]
        choice['word'] = data[0][0]
        choice['choice'] = (a[str(b[0])],a[str(b[1])],a[str(b[2])],a[str(b[3])])
        choice['key'] = ind+1
        # choice['choice'] = (data[0][1],data_sub[0][1],data_sub[1][1],data_sub[2][1])
        JsonData_list.append(choice)
    jsondata = json.dumps(JsonData_list,ensure_ascii=False)
    print jsondata
    cur.close()
    conn.close()
    return 0


if __name__ == '__main__':
    test_word()