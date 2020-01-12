# class Solution(object):
#     def twoSum(self, nums, target):
#         j =0
#         while (j < len(nums)):
#             print(j)
#             for x in nums:
#                 if x + nums[j] == target: 
#                     print([nums.index(x), j])
#                     return [nums.index(x), j]
#             j+=1
#         """
#         :type nums: List[int]
#         :type target: int
#         :rtype: List[int]
#         """
        

# num =[0, 2, -90, 1]
# target = 89
# s = Solution()
# s.twoSum(num, target)



# def sockMerchant(n, ar):
#     hash = {}
#     for l in ar:
#         if hash.get(l) == None: 
#             hash.get(l) = 1            
#         else:
#             hash.get(l)+=1
                
#     count = 0
#     val;

#     for key in hash:
#         if hash.get(key) > 2 or hash.get(key) == 2: 
#             val = hash.get(key) / 2
#             count+=Math.floor(val)
            
        
#     return Math.floor(count)