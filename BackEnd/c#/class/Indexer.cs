class Indexer
{
    //# read only assigm once time
    private readonly Dictionary<string, string> dic = new Dictionary<string, string>();
    public void Init(){
        //! dic = new Dictionary<string, string>(); error
    }

    public string this[string key]{
        get {return dic[key];}
        set {dic[key] = value;}
    }
}
