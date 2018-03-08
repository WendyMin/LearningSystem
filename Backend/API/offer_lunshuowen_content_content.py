# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#提供论说文写作技巧每一个大类当中小类的具体内容 参数 大类别名称：如苏财宝典，小类名称：如中国经典素材。
def offer_contentl(type_one,type_two):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    con = str(type_two).decode('utf-8')
    namel = ''
    if str(type_one).decode('utf-8') == '题型突破'.decode('utf-8'):
        namel = 'lunshuowen_tixingtupo'
    elif str(type_one).decode('utf-8') == '审题立意'.decode('utf-8'):
        namel = 'lunshuowen_shentiliyi'
    elif str(type_one).decode('utf-8') == '经典模板'.decode('utf-8'):
        namel = 'lunshuowen_jingdianmuban'
    elif str(type_one).decode('utf-8') == '画龙点睛'.decode('utf-8'):
        namel = 'lunshuowen_hualongdianjing'
    else:
        namel = 'lunshuowen_sucaibaodian'
    sql='''select content from %s where section_name = '%s' '''%(namel,con)
    cur.execute(sql)
    al = cur.fetchall()
    a_dict = {}
    for j in range(len(al)):
        a_dict[str(j)] = str(al[j][0]).decode('utf-8')
    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata
def offerl():
    sys.exit(offer_contentl(sys.argv[1],sys.argv[2]))
if __name__ == '__main__':
    # offer_contentl('题型突破','命题作文')
    offerl()