# coding=utf-8
import json
import MySQLdb
import  random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


#根据前端给的 年份，提供该篇文章的错误类型和对应解�?
def offer_lunzheng_zhenti_error(year):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    # yearl = int(year)
    yearl = str(year).decode('utf-8')
    sql='''select id,error_type,error_analysis  from lunzheng_zhenti_error where year='%s' ''' % (yearl)
    cur.execute(sql)
    all= cur.fetchall()
    #print(all)
    error_type=[]
    error_analysis=[]
    for x in all:
        error_type.append(x[1])
        error_analysis.append(x[2])

    length=len(all)
    #print(length)
    dict=[]

    for i in range(0,length):
        per_dict={}
        per_dict['id']=str(i+1)

        per_dict["error_type"]=error_type[i]
        per_dict['error_analysis']=error_analysis[i]

        dict.append(per_dict)





    jsondata = json.dumps(dict, ensure_ascii=False)
    print jsondata


def offer_lunzheng_zhenti_error1():
    sys.exit(offer_lunzheng_zhenti_error(sys.argv[1]))

if __name__ == '__main__':
    offer_lunzheng_zhenti_error1()

    #offer_lunzheng_zhenti_error('管理类联考2010年真题')
