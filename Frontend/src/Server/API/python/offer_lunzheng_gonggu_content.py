# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')


def offer_question(year):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    # yearl = int(year)

    yearl = str(year)
    sql='''select id ,article_title,article_content from lunzheng_analysis_gonggu_question where year='%s' ''' % (yearl)
    cur.execute(sql)
    all= cur.fetchall()
    a_dict={}


    id = str(all[0][0])
    title= str(all[0][1])
    content = str(all[0][2])

    title_content=title.replace('\r','').split('\n')
    new_title_content=[]
    title_article=title_content[0]
    title_content=title_content[1:]
    while "" in title_content:
        title_content.remove("")
    for x in title_content:
        new_title_content.append('    '+x)

    content=content.replace('\r','').split('\n')
    name=content[0]
    content=content[1:]
    new_content=[]
    while "" in content:
        content.remove("")
    for x in content:
        new_content.append('    '+x)

    a_dict['id']=id
    a_dict['title']=title_article
    a_dict['title_article']=new_title_content
    a_dict['name']=name
    a_dict['content']=new_content

    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print (jsondata)

    cur.close()
    conn.commit()
    conn.close()

def odd():
    sys.exit(offer_question(sys.argv[1]))

if __name__ == '__main__':
    #offer_question("在职MBA联考2004年10月真题")
    odd()
