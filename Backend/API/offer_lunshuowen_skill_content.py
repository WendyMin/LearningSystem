# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
#提供论说文写作技巧每一个大类的具体内容 参数 类别名称：如题型突破
def offer_content(name):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    namel = ''
    if str(name).decode('utf-8') == '题型突破'.decode('utf-8'):
        namel = 'lunshuowen_tixingtupo'
    elif str(name).decode('utf-8') == '审题立意'.decode('utf-8'):
        namel = 'lunshuowen_shentiliyi'
    elif str(name).decode('utf-8') == '经典模板'.decode('utf-8'):
        namel = 'lunshuowen_jingdianmuban'
    elif str(name).decode('utf-8') == '画龙点睛'.decode('utf-8'):
        namel = 'lunshuowen_hualongdianjing'
    else:
        namel = 'lunshuowen_sucaibaodian'
    sql='''select section_name from %s ''' % (namel)
    cur.execute(sql)
    all_data = cur.fetchall()
    a_list = []
    for i in range(len(all_data)):
        a_list.append(str(all_data[i][0]))
    bb  =set(a_list)
    # print bb
    a_dict  ={}
    for i in range(len(list(bb))):
        a_dict[str(i)] = str(list(bb)[i]).decode('utf-8')
    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata
def offer_contentl():
	sys.exit(offer_content(sys.argv[1]))

if __name__ == "__main__":
    # offer_content('素材宝典')
    offer_contentl()
