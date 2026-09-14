class methods
{
    private string _name = "sultan";
    public int Sum(params int[] nums)
    {
        // _name = "salateeeen";
        int sum = 0;
        foreach (var num in nums)
        {
            sum += num;
        }
        return sum;
    }

}