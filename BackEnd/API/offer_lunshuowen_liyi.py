# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


#根据前端返回的文章篇名，提供该文 正确和不正确立意
#若该文无不正确立意，则该项对应的列表为空

def offer_lunshuo_liyi(year):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    # yearl = int(year)
    yearl = str(year).decode('utf-8')
    sql1='''select id ,liyi_type,liyi_analysis from lunshuowen_liyi_right where belong_to='%s' ''' % (yearl)
    cur.execute(sql1)
    all_right= cur.fetchall()

    sql2='''select id ,liyi_type,liyi_analysis from lunshuowen_liyi_wrong where belong_to='%s' ''' % (yearl)
    cur.execute(sql2)
    all_wrong= cur.fetchall()



    #print(all_right)
    #print(all_wrong)

    all_right_type=[]
    all_right_analysis=[]
    all_wrong_type=[]
    all_wrong_analysis=[]

    for x in all_right:
        all_right_type.append(x[1])
        all_right_analysis.append(x[2])

    for y in all_wrong:
        all_wrong_type.append(y[1])
        all_wrong_analysis.append(y[2])

    right_dict=dict(zip(all_right_type,all_right_analysis))
    wrong_dict=dict(zip(all_wrong_type,all_wrong_analysis))

    result_dict={}

    result_dict['right_liyi']=right_dict
    result_dict['wrong_liyi']=wrong_dict

    jsondata = json.dumps(result_dict, ensure_ascii=False)
    print jsondata

def offer_lunshuo_liyi1():
    sys.exit(offer_lunshuo_liyi(sys.argv[1]))
	
if __name__ == "__main__":

    offer_lunshuo_liyi1()

    #offer_lunshuo_liyi('经济类联考2011年真题')

