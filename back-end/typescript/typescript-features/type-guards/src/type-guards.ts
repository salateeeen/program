/// Type Guards

type DB = { type: "db"; connetionUrl: string };

let db: DB = {
  type: "db",

  connetionUrl: "mongodb/mazraetak",
};

type FS = { type: "file"; path: string };

let fs: FS = {
  type: "file",

  path: "Document/program",
};

type Source = DB | FS;

function isFile(source: Source) {
    /// return boolean but if true return the hole source file
  return source.type === "file";
}

function load(source: Source): void {
  /// we should know even sorce is DB
  /// or FS so we explicitly checks comming src
  if (source.type === "file") {
    //* fs ...
    //& open source.path
    return;
  }
  //* db ...
  //& connenct to source.connetionUrl
}

class Admin {}
class User {}

const user = new User();

type Entity = Admin | User;

function init(entity: Entity) {
  if (entity instanceof Admin) {
    /// admin...
    return;
  }
  /// user...
}
