import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostFileS3Service {
  constructor(protected http: HttpClient) {
  }
  postProfileFileS3(url: string, param: any, type: string) {
    let url2 = new URL(url);
    // let c = url2.searchParams.get["AWSAccessKeyId"];
    // let d = url2.searchParams.get["Content-Type"];
    console.log(url2);

    let headers = new HttpHeaders({
      "content-type": type,
      "expires": "1634870037",
      "signature": "1T/rULiwZ61uQnX53vqAiJidN+k=",
      "x-amz-security-token": "IQoJb3JpZ2luX2VjEHIaDmFwLXNvdXRoZWFzdC0xIkcwRQIgOfKMj6W6Nhy9XKSHfIqxnTFV3puo/P1ECXdTr4o+shYCIQDIDQkzZk/H6G/CYvP0M7ncm9AjMMrqMbecwG6R0NXNRirNAgj7//////////8BEAAaDDI2Njc2ODMyNTM0MyIMOHEgo9HXeGVj5LJtKqECOkq21yYrOw0l5BU0thu8lMhIZe9k8e99jl7Zer5ZS496MG4IL5qpNXEeQgfaT227Dd4ZDNrDMhFErCFSRy4na2f9LR5MzupMtnSQRyALasSojABbLhooT5cK84Wjwrnkerp7REJqGt6vZu0Z4Kk+JhdyjR2AxeyWR1UlPdhot0tAOGwkJ7IiqVte7vsWGmzcYh4DWhNTzwTM91W4ybpMnePF92kY00miYR9F8GwSCSSzYtG/opDopEAdHAwfPHprIe0tv+qL1itajhte8vGMMfEm0EzuZEZ5T3UV0+as6BWloa5lks8PUyYP0Tjt7T4vCupk/pAnXa2YO9d/kEwq4ERiG4xxpe7HmfPae1rAAfVdMkkqwFhux1moTs1uQJihVjCsvsiLBjqaAcb3TGHM1Ncr6VmgtHXzUREdfPfoQUP72NgOn4cSD9JA9r47ni5ytcXKiSDhe6tJoMH73xq3HQbXAFRVxd/evhNkVQ3wZXyhcw78dsTNfTvZ/8kVUMVmzM65G9l8lm8Mgdi0A8kP7ufRHdtuOk/a3BhpJp/OahJrlgtHHV07h0OyxzuiB511KTv6Y9Vf1kRje4Q4YolM04jVjZ4=",
      "cache-control": "no-cache"
    });
    return this.http.put(url, param, {'headers': headers});
  }
  postUserProfileFileS3(url: string, param: any, type: string) {
    // console.log(new URL(url).search.indexOf('Expires'));
    let headers = new HttpHeaders({
      "content-type": type,
      "expires": "1635151622",
      "signature": "I5CIG6edKYdlLOPUuldEyEdArI4=",
      "x-amz-security-token": "IQoJb3JpZ2luX2VjEMH//////////wEaDmFwLXNvdXRoZWFzdC0xIkYwRAIgGyRIBQMwSwbg4E4U2LXZsy4oAWHNZ6wJSOFCQslCFs8CIC2KZK+W3M38n8W9Lb9pKczS5jBQWoZWDTH93NVT7UGXKsQCCFoQABoMMjY2NzY4MzI1MzQzIgwTK2qnpU+FNtQrxQoqoQK7W4gY8tPN5oSWEMoEuE7mFtCwOI2AJ3yK6pEGfxOsL+5coonNph2vHzX3bGhfIBJIjxhXLVobE/3qYsZqd0pRUgtABXCXKhSskfX2UmrIFRoskCwvZbzZoiDVKPqu3eTAL0t2Ed4o8G1H4VxEt4NBF68f+eKEZ1ACYNLPz89FppsFTWLY/5PoXeLvfnGBSFANBoz5/A3HTorbawNidSDtO3TXP+59h1xtid9pxP8RS7NgJirb3Nwz6BUsPhcMYmYC+0mPm1e1YYeUe3X8YWcOzsbPZF5poEjN8mvjgDyrQUWXqtixrn3uaUk3ISSKC06Gjn7UZKHL+W4MdcBkn/yyGdFP7lhuuL1A/dx6qMa/5096SmYqaMuTYQXvs7Se44l6MJ3W2YsGOpsBwaC+i1np+SbRfe20qhAGcpROsY+JdWNx1eQbjUv2hix7CL3gPWuqjrdaX35MiBsiazVMcKoTMFqmGtYDqjfadpNLBtW2+g1oDXjSuVVTLCU1V4QIdIdCRCwiQ2A1rk1l/FlUjbcunqvDr2gAPdwFSUyoNANhOd7u6m7iNHUSIpzARNKa4yprWTtdTJr8HdB+zDUCd3vluUM6Ouk=",
      "cache-control": "no-cache"
    });
    return this.http.put(url, param, {'headers': headers});
  }
}
