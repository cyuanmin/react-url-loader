//
//  ViewController.swift
//  react-app
//
//  Created by Yuanming Chen on 11/8/17.
//  Copyright © 2017 Yuanming Chen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var webView: UIWebView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let url = URL (string: "https://www.google.com")
        let requestObj = URLRequest(url: url!)
        webView.loadRequest(requestObj)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

