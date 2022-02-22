# 1. 리스트로 데이터를 관리

q_list = []

while True:
    question = input("write a question: ")
    if question == "q":
        break
    else:
        # 리스트 안에다가 {Q,A} 딕셔너리 묶음을 하나씩 집어 넣는다.
        q_list.append({"Q":question, "A":""})
print(q_list)

# 답변의 경우 사용자의 질문의 갯수만큼만 답변하면 된다.
for x in q_list:
    # 질문만 출력해서 사용자에게 보여준다.
    print(x["Q"])
    answer = input("answer me: ")
    x["A"] = answer
print(q_list)



# 2. 딕셔너리로 데이터를 관리

q_dic = {}

while True:
    question = input("ask a question: ")
    if question == "q":
        break
    else:
        # 사용자의 입력값을 key에 넣어주고 답변은 아직이니 빈칸으로 둔다.
        q_dic[question] = ""


for i in q_dic:
    print(i)
    answer = input("answer me: ")
    q_dic[i] = answer
print(q_dic)