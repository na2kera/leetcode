#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        //二重ループで足してtargetになるものを探す
        for(int i=0; i < nums.size();i++){
            for(int j=i+1; j < nums.size();j++){
                if(nums[i] + nums[j] == target){
                    return {i,j};
                }
            }

        }
        return {};
    }
};


int main(void){
    // Your code here!
    vector<int> nums = {1, 3, 2, 5};
    // vector<int> nums = [2,7,11,15]
    Solution solution;
    vector<int> result = solution.twoSum(nums, 5);
    cout << "[" << result[0] << "," << result[1]<< "]";
}
