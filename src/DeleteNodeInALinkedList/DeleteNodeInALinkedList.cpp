#include <cstddef>

// Definition for singly-linked list node
struct ListNode
{
    ListNode(int x) : data(x), next(NULL) {}
    ListNode(int x, ListNode *y) : data(x), next(y) {}

    int data;
    ListNode *next;
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