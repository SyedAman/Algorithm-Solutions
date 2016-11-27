#include <cstddef>

// Definition for a singly-linked list
struct LinkedList
{
    
};

// Definition for singly-linked list node
struct ListNode
{
    int data;
    ListNode *next;
    ListNode(int x) : data(x), next(NULL) {}
    ListNode(int x, ListNode *y) : data(x), next(y) {}
};

// Solution
class Solution
{
  public:
    void deleteNode(ListNode *node)
    {
    }
};

// Test solution
int main()
{
    return 0;
};